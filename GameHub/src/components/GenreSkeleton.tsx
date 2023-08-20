import {
  Card,
  Skeleton,
  CardBody,
  SkeletonText,
  HStack,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Card>
      <HStack>
        <Skeleton />
        <CardBody>
          <SkeletonText noOfLines={1} />
        </CardBody>
      </HStack>
    </Card>
  );
};

export default GenreSkeleton;
