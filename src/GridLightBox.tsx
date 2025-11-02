import { FC, useRef, useState } from "react";
import { LightCell } from "./components/LightCell";
import useTimer from "./hooks/useTimer";
interface IGridLightBoxProps {

};

export const GridLightBox: FC<IGridLightBoxProps> = () => {
    const [gridData, setGridData] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
    const stackRef = useRef<{ order: string[] }>({ order: [] })
    const { startTimer, resetTimer } = useTimer(deactivate)
    const handleActivate = (row: number, idx: number, on: number) => {
        const copyArr = [...gridData]
        copyArr[row][idx] = on ? 0 : 1
        setGridData(copyArr)
        stackRef.current.order.push(`${row}:${idx}`)
        console.log(stackRef.current.order)
        resetTimer()


    }
    function deactivate() {
        if (stackRef.current.order.length == 0) {
            resetTimer()
        } else {
            setGridData((prev) => {

                const copyArr = [...prev]

                const lastLightPos = stackRef.current.order.pop() || ""
                const row = Number(lastLightPos[0])
                const pos = Number(lastLightPos[2])
                copyArr[row][pos] = 0
                return copyArr

            })
        }
    }

    const handleDeactivateAll = () => {
        startTimer({ initWaitTime: 1000, gapBtw: 500 })
        console.log(stackRef.current.order)
    }

    return (
        <div className="text-left">
            <div className="flex flex-col gap-2">
                {gridData.map((row, i) => {
                    return <div key={i} className="flex gap-2">
                        {row.map((light, ind) => {
                            return <LightCell key={i}  on={light} idx={ind} row={i} onActivate={handleActivate} />
                        })}
                    </div>
                })}
            </div>
            <button className="bg-sky-100 p-1 px-4 rounded mt-8 cursor-pointer hover:bg-sky-200 hover:outline-1 outline-gray-600 focus:bg-sky-400" onClick={handleDeactivateAll}>De Avtivate all in order</button>
        </div>
    );
}
