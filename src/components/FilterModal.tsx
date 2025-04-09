import React from "react";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import type { MentorFilters } from "@thrip/types";
import { expertiseList } from "@thrip/utils/expertise";
import Dropdown from "./Dropdown";

interface FilterModalProps {
  isOpen: boolean;
  loading: boolean;
  onClose: () => void;
  applyFilters: (filters: MentorFilters) => void;
  initialFilters: MentorFilters;
  includeExpertise?: boolean;
  header: string;
}

const FilterModal: React.FC<FilterModalProps> = ({
  includeExpertise,
  initialFilters,
  loading,
  isOpen,
  onClose,
  applyFilters,
  header,
}) => {
  const initialValues: MentorFilters = {
    expertise: initialFilters.expertise ?? "",
    // language: initialFilters.language ?? '',
    rateSortOrder: initialFilters.rateSortOrder ?? "",
  };

  const validationSchema = Yup.object().shape({
    expertise: Yup.string().notRequired(),
    // language: Yup.string().notRequired(),
    rateSortOrder: Yup.string().oneOf(
      ["ASC", "DESC", ""],
      "Invalid sort order"
    ),
  });

  const handleSubmit = (values: MentorFilters) => {
    applyFilters(values);
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Filter {header}</ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form>
              <ModalBody>
                <Stack gap="5">
                  {includeExpertise && (
                    <Field name="expertise">
                      {({ field }) => (
                        <Dropdown
                          label="Area Of Expertise"
                          placeholder="Select Area of Expertise"
                          {...field}
                        >
                          {expertiseList.map(({ name }) => (
                            <option key={name} value={name}>
                              {name}
                            </option>
                          ))}
                        </Dropdown>
                      )}
                    </Field>
                  )}
                  {/* <Field name="language">
                    {({ field }) => (
                      <Dropdown placeholder="Select Language" label="Language" {...field}>
                        {languageList.map((i) => (
                          <option key={i.name} value={i.name}>
                            {i.name}
                          </option>
                        ))}
                      </Dropdown>
                    )}
                  </Field> */}
                </Stack>
              </ModalBody>
              <ModalFooter display="flex" justifyContent="space-between">
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  isLoading={loading}
                  isDisabled={!isValid || !dirty}
                >
                  Apply Filters
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default FilterModal;
