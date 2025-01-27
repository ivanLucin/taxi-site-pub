'use client'
import { Header } from "@/components/Header"
import { Calendar } from "@/components/ui/calendar"
import { DatePicker } from "@/components/ui/date-picker"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import pickup from "./pickup.css"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField } from "@/components/ui/form"
import { useForm } from "react-hook-form"

export default function RSLayout({
    children,
}) {
    const form = useForm({
        defaultValues: {
            pickupDate: "",
            pickupTime: "",
            pickupLocation: "",
            dropoffLocation: "",
            passengers: "",
            transferType: "",
        },
    });
    const formSchema = {
        pickupDate: form.register("pickupDate", { required: true }),
        pickupTime: form.register("pickupTime", { required: true }),
        pickupLocation: form.register("pickupLocation", { required: true }),
        dropoffLocation: form.register("dropoffLocation", { required: true }),
        passengers: form.register("passengers", { required: true }),
        transferType: form.register("transferType", { required: true }),
    }
    function onSubmit(data) {
        console.log(data)
    };
    return (
        <div className="mx-auto w-full max-w-7xl">
            <div className="border rounded-sm border-gray-200">
                <Form {...form} className="py-4 px-2 w-full">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex justify-between items-center px-2">
                    <FormField name="pickupDate" controle={form.control} label="Pickup Date" required render={({ field }) => (

                        <div className="item">
                            <span>Pickup Date</span>
                            <FormControl {...field} as={DatePicker} >
                                <DatePicker/>
                            </FormControl>
                        </div>
                    )}>
                    </FormField>
                    <div className="item">
                        <span>Pickup Time</span>
                        <Input type="time"/>
                    </div>
                    <div className="item">
                        <span>Pickup Location</span>
                        <Select>
                            <SelectTrigger>
                                <span>Pickup Location</span>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="split">Split</SelectItem>
                                <SelectItem value="Zagreb">Zagreb</SelectItem>
                                <SelectItem value="Rijeka">Rijeka</SelectItem>
                                <SelectItem value="Zadar">Zadar</SelectItem>
                                <SelectItem value="Osijek">Osijek</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="item">
                        <span>Dropoff Location</span>
                        <Select>
                            <SelectTrigger>
                                <span>Dropoff Location</span>
                            </SelectTrigger>
                            <SelectContent>
                            <SelectItem value="split">Split</SelectItem>
                                <SelectItem value="Zagreb">Zagreb</SelectItem>
                                <SelectItem value="Rijeka">Rijeka</SelectItem>
                                <SelectItem value="Zadar">Zadar</SelectItem>
                                <SelectItem value="Osijek">Osijek</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="item">
                        <span>Number of passengers</span>
                        <Input type="number" placeholder="1" min="1" max="20"/>
                    </div>
                    <div className="item">
                        <span>Transfer Type</span>
                        <Select>
                            <SelectTrigger>
                                <span>Transfer Type</span>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem default value="london">One way</SelectItem>
                                <SelectItem value="paris">Return</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                <Button variant="primary" type="submit" className="w-full mt-4 book-button">Book Now</Button>
                </form>
                </Form>
            </div>
        </div>
    )
}