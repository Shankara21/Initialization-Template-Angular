export interface Welcome {
  id: number;
  categoryId: number;
  sectionId: number;
  project: string;
  line: string;
  format_code: string;
  pic: string;
  status: string;
  SectionId: number;
  CategoryId: number;
  Category: Category;
}

export interface Category {
  code: string;
  name: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toWelcome(json: string): Welcome[] {
    return JSON.parse(json);
  }

  public static welcomeToJson(value: Welcome[]): string {
    return JSON.stringify(value);
  }
}
