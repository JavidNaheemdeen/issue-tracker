import { issueSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest,
   { params }: { params: { id: string } }) {
   const body = await request.json();

   const validation = issueSchema.safeParse(body);

   if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 })

   const issue = prisma.issue.findUnique({
      where: { id: parseInt(params.id) }
   })

   if (!issue)
      return NextResponse.json({ error: "Issue not found" }, { status: 404 })

   const updatedIssue = await prisma.issue.update({
      where: { id: parseInt(params.id) },
      data: {
         title: body.title,
         description: body.description
      }
   })

   return NextResponse.json(updatedIssue, { status: 200 })

}

export async function DELETE(request: NextRequest,
   { params }: { params: { id: string } }) {
   const issue = prisma.issue.findUnique({
      where: { id: parseInt(params.id) }
   })

   if (!issue)
      return NextResponse.json({ error: "Issue not found" }, { status: 404 })

   const deletedIssue = await prisma.issue.delete({
      where: { id: parseInt(params.id) }
   })

   return NextResponse.json(deletedIssue, { status: 200 })
}

