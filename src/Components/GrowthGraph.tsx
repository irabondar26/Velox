import { useLayoutEffect, useState, useRef } from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis } from 'recharts';

const data = [
    { step: 1, val: 120 }, { step: 2, val: 180 }, { step: 3, val: 250 },
    { step: 4, val: 210 }, { step: 5, val: 280 }, { step: 6, val: 320 },
    { step: 7, val: 450 }, { step: 8, val: 380 }, { step: 9, val: 420 },
    { step: 10, val: 650 }, { step: 11, val: 780 }, { step: 12, val: 890 },
];

export default function GrowthGraph({ isActive }: { isActive: boolean }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dims, setDims] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (containerRef.current) {
            setDims({
                width: containerRef.current.offsetWidth,
                height: containerRef.current.offsetHeight
            });
        }
    }, []);

    return (
        <div ref={containerRef} className="w-full h-48 min-w-0 flex items-center justify-center">
            {dims.width > 0 && (
                <ComposedChart 
                    width={dims.width} 
                    height={dims.height} 
                    data={data}
                    margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                >
                    <XAxis dataKey="step" hide />
                    <YAxis hide domain={[0, 'dataMax + 100']} />

                    <Bar
                        key={isActive ? 'bar-active' : 'bar-inactive'}
                        dataKey="val"
                        fill="#083344"
                        barSize={dims.width / 20}
                        radius={[3, 3, 0, 0]}
                        isAnimationActive={isActive}
                        animationDuration={1200}
                    />

                    <Line
                        type="monotone"
                        key={isActive ? 'line-active' : 'line-inactive'}
                        dataKey="val"
                        stroke="#0284C7"
                        strokeWidth={1.5}
                        strokeDasharray="4 4"
                        dot={{ r: 4, fill: '#fff', strokeWidth: 0 }}
                        isAnimationActive={isActive}
                        animationDuration={2000}
                    />
                </ComposedChart>
            )}
        </div>
    );
}