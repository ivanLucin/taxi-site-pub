import { Header } from "@/components/Header"
import { Calendar } from "@/components/ui/calendar"
import { DatePicker } from "@/components/ui/date-picker"

export default async function RSLayout({
    children,
}) {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <div className="px-4 py-2">
                <div className="flex col justify-between items-center border-b border-gray-200 py-4 w-full">
                    <div className="item">
                        <span>Pickup Date</span>
                        <DatePicker/>
                    </div>
                    <div className="item">
                        <span>Pickup Time</span>
                    </div>
                    <div className="item">
                        <span>Pickup Location</span>
                    </div>
                    <div className="item">
                        <span>Dropoff Location</span>
                    </div>
                    <div className="item">
                        <span>Number of passengers</span>
                    </div>
                    <div className="item">
                        <span>Transfer Type</span>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}