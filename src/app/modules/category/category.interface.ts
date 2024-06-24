export type TCategory = {
    id: string;
    name: string;
    icon?: string;
    description?: string;
    status: "active" | "inactive";
    createdAt: Date;
    updatedAt: Date;
  };
  