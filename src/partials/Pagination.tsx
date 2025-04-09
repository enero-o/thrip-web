import { type FC } from "react";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  dataCount: number;
  currentPage: number;
  onPageChange: (data: { selected: number }) => void;
  setItemsPerPage: (i: number) => void;
  itemsPerPage: number;
  forcedPage?: number;
  startCount?: number;
  endCount?: number;
}

const Pagination: FC<PaginationProps> = ({
  dataCount,
  onPageChange,
  currentPage,
  forcedPage,
  startCount,
  endCount,
  setItemsPerPage,
  itemsPerPage,
}) => {
  const pageCount = Math.ceil(dataCount / itemsPerPage);

  return (
    <HStack justifyContent="space-between" flexWrap="wrap" mt="6">
      <Flex order={1} w={{ base: "55%", md: "30%" }}>
        <Text fontSize="sm">
          {`Showing ${startCount} - ${endCount} out of ${dataCount}`}
        </Text>
      </Flex>

      <VStack order={{ base: 3, md: 2 }} w={{ base: "100%", md: "30%" }}>
        <ReactPaginate
          containerClassName={"pagination"}
          activeClassName={"active-item"}
          pageClassName={"page-item"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={onPageChange}
          breakLabel="..."
          previousLabel={currentPage !== 0 && <ArrowBackIcon />}
          nextLabel={pageCount - currentPage > 1 && <ArrowForwardIcon />}
          forcePage={forcedPage}
        />
      </VStack>

      <Flex
        order={{ base: 2, md: 3 }}
        w={{ base: "40%", md: "30%" }}
        justifyContent="flex-end"
      >
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                borderWidth={1}
                borderColor="gray.700"
                fontSize={14}
                as={Button}
                // variant="ghost"
                borderRadius={12}
                w={40}
                mr={0}
                rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              >
                Show rows {itemsPerPage}
              </MenuButton>

              <MenuList borderWidth={1} borderColor="gray.700" color="white">
                {[25, 50, 75, 100].map((item) => (
                  <RowCountMenuItem
                    key={item}
                    value={item}
                    onClick={() => setItemsPerPage(item)}
                  />
                ))}
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </HStack>
  );
};

type RowCountMenuItemProps = {
  value: number;
  onClick: () => void;
};

const RowCountMenuItem = ({ value, onClick }: RowCountMenuItemProps) => {
  return (
    <MenuItem onClick={onClick}>
      <Text>{value}</Text>
    </MenuItem>
  );
};

export default Pagination;
