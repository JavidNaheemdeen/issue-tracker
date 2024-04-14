
import prisma from '@/prisma/client'
import IssueSummary from './IssueSummary'

export default async function Home() {
  const open = await prisma.issue.findMany({
    where: {
      status: 'OPEN',
    }
  });
  const closed = await prisma.issue.findMany({
    where: {
      status: 'CLOSED',
    }
  });
  const inProgress = await prisma.issue.findMany({
    where: {
      status: 'IN_PROGRESS',
    }
  });

  return (
    <IssueSummary open={open} inProgress={inProgress} closed={closed} />
  )
}
