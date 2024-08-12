import { useState, useEffect } from "react";

const formatter = new Intl.NumberFormat("en-us", {
    style: 'currency',
    currency: 'USD',
})

interface CurrencyProps {
    value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({
    value,
}) => {
    const [isMonuted, setIsMonuted] = useState(false);

    useEffect(() => {
        setIsMonuted(true);
    },[])

    if (!isMonuted) {
        return null;
    }

    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    );
}

export default Currency;