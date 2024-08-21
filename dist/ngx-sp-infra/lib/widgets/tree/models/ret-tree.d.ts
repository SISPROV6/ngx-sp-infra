import { IError } from '../../../models/ierror';
import { TreeItem } from './tree-item';
export declare class RetTree implements IError {
    Error: boolean;
    ErrorMessage: string;
    RetTreeModel: TreeItem[];
}
