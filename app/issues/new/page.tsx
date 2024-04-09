import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(
  () => import('@/app/issues/components/IssueForm'),
  {ssr: false,
    loading: () => < IssueFormSkeleton/>
  }
);

const NewIssuesPage = () => {
  return (
    <IssueForm/>
  )
}

export default NewIssuesPage