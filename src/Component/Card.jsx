import {
  CardBody,
  Card,
  Stack,
  Image,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const Card = (props) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={props.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.Title}</Heading>
          <Text>
            {props.body}
          </Text>
          
        </Stack>
      </CardBody>

      <Button left={0} color={"#424961"} w={"131.34px"} paddingX={"3.14px"} paddingY={"26.17px"} h={"42.28px"} rounded={"20.94px"} variant="solid" colorScheme="blue">
        Read More
      </Button>
    </Card>
  );
};

export default Card;
