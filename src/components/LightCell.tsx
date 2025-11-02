import { FC } from "react";
interface ILightCellProps {
    on: number;
    idx: number;
    row: number;
    onActivate: (row: number, idx: number, on: number) => void
};

export const LightCell: FC<ILightCellProps> = ({on, onActivate, row, idx}) => {
    return (
        <button className={`w-7 h-7 ${ on ? "bg-green-400" :"bg-gray-400" } rounded`} onClick={() => {
            onActivate(row, idx, on)
        }}>
        </button>
    );
}
