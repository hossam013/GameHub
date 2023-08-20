import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {
  cardWidth: string;
}

const GameCardSkeleton = ({ cardWidth }: Props) => {
  return (
    <Card width={cardWidth} borderRadius={15} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
