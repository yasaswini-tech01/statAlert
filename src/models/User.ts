// models/User.ts
import mercury from "@mercury-js/core";export const User = mercury.createModel("User", {
  connectId: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
  },
  firstName: {
    type: "string",
  },
  lastName: {
    type: "string",
  },
  role: {
    type: "enum",
    enumType: "string",
    enum: [
      "SUPER_ADMIN",
      "ORG_ADMIN",
      "CAFE_ADMIN",
      "BRANCH_ADMIN",
      "EMPLOYEE",
    ],
  },
  organization: {
    type: "relationship",
    ref: "Organization",
  },
  branch: {
    type: "relationship",
    ref: "Branch",
  },
  isActive: {
    type: "boolean",
    default: true,
  },
});
