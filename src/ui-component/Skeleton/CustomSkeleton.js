const { Stack, Skeleton } = require("@mui/material")

const CustomSkeleton = () => {

  return (
    <Stack spacing={1}>
      <Skeleton variant='rectangular' width={'100%'} height={50} />
      <Skeleton variant='rectangular' width={'100%'} height={50} />
      <Skeleton variant='rectangular' width={'100%'} height={50} />
      <Skeleton variant='rectangular' width={'100%'} height={50} />
      <Skeleton variant='rectangular' width={'100%'} height={50} />
      <Skeleton variant='rectangular' width={'100%'} height={50} />
      <Skeleton variant='rectangular' width={'100%'} height={50} />
    </ Stack>
  )
}

export default CustomSkeleton