export interface ButtonHTMLAttributes {
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    type?: 'submit' | 'reset' | 'button';
    value?: string | string[] | number;
};

export interface InputBaseProps {
    id: string;
    type: 'email' | 'password' | 'text';
    label?: string;
    name?: string;
    placeholder?: string;
    className?: string;
    value?: string;
    autoComplete?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface FormBaseProps {
    onSubmit?: () => void;
    method?: 'GET' | 'POST';
}