import { useEffect, useState } from "react";

type InternalLayout = "VerticalLayout" | "HorizontalLayout";

const control = (scope: string) => ({
  type: "Control",
  scope: `#/properties/${scope.replace(".", "/properties/")}`,
});

const category = (
  label: string,
  fields2: string[][],
  internalLayout: InternalLayout
) => ({
  type: "Category",
  label,
  elements: fields2.map((fields) => ({
    type: internalLayout,
    elements: fields.map(control),
  })),
});

const categories: { label: string; fields: string[][] }[] = [
  {
    label: "Personal Details",
    fields: [
      ["firstName", "lastName"],
      ["birthDate", "gender"],
      ["nationality", "maritalStatus"],
    ],
  },
  {
    label: "Contact Information",
    fields: [
      ["email", "phone"],
      ["address.street", "address.landMark"],
      ["address.city", "address.state", "address.postalCode"],
    ],
  },
  {
    label: "Employment Information",
    fields: [
      ["jobTitle", "department"],
      ["startDate", "workLocation"],
    ],
  },
];

const getUischema = () => {
  const internalLayout =
    innerWidth < 640 ? "VerticalLayout" : "HorizontalLayout";
  return {
    type: "Categorization",
    elements: categories.map((c) =>
      category(c.label, c.fields, internalLayout)
    ),
    options: {
      variant: "stepper",
      showNavButtons: true,
    },
  };
};

export const useUischema = () => {
  const [uischema, setUischema] = useState(getUischema());
  useEffect(() => {
    setUischema(getUischema());
    const handleResize = () => {
      setUischema(getUischema());
    };
    addEventListener("resize", handleResize);
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);
  return uischema;
};
