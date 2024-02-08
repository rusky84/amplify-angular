  /**
   * Flattened tree node that has been created from a FileNode through the flattener. Flattened
   * nodes include level index and whether they can be expanded or not.
   */
  export interface FlatTreeNode {
    name: string;
    type: string;
    level: number;
    expandable: boolean;
  }