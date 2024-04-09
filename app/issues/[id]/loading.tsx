import { Flex, Card, Box } from '@radix-ui/themes'
import { Skeleton } from '@/app/components/index'


const LadingIssueDetailPage = () => {
  return (
    <Box className='max-w-xl'>
      <Skeleton />
      <Flex className='space-x-4' my='2'>
        <Skeleton width='5rem' />
        <Skeleton width='8rem' />
      </Flex>
      <Card className='prose' mt='4'>
        <Skeleton count={3}/>
      </Card>
    </Box>
  )
}

export default LadingIssueDetailPage