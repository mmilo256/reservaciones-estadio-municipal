import EventCard from "./EventCard"
import CreateReservationForm from "../../forms/create-reservation/CreateReservationForm"
import Container from "../../components/Container"

const CreateReservation = () => {
    return (
        <div className="bg-slate-100 pt-5 min-h-[calc(100dvh-3rem)]">
            <Container className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                    <h2 className="text-xl mb-4">Nueva reservación</h2>
                    <CreateReservationForm />
                </div>
                <div className="col-span-2">
                    <h2 className="text-xl mb-4">Horas ocupadas</h2>
                    <div className="bg-white p-4 flex flex-col gap-2 shadow rounded">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CreateReservation