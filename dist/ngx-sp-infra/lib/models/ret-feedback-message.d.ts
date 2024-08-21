import { IError } from "./ierror";
/** Usada para um retorno simples que possua apenas uma mensagem de feedback */
export declare class RetFeedbackMessage implements IError {
    Error: boolean;
    ErrorMessage: string;
    FeedbackMessage: string;
}
