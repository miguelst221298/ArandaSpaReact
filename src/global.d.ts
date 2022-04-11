import { NumberSchema } from "yup";

declare module 'yup'{
    class NumberSchema{
        mayorQueCero():this;
    }
}