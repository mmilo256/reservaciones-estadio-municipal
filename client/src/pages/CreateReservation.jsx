import EventCard from "../components/EventCard"
import ReservationForm from "../components/forms/ReservationForm"
import Container from "../components/ui/Container"

const CreateReservation = () => {
    return (
        <div className="bg-slate-100 pt-5 min-h-[calc(100dvh-3rem)]">
            <Container className="grid grid-cols-2 gap-4">
                <div>
                    <h2 className="text-xl mb-4">Datos del solicitante</h2>
                    <ReservationForm />
                </div>
                <div>
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