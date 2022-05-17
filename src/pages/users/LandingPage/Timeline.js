import React from 'react'
import Calendar from 'react-calendar'
import '../../../assets/css/Calendar.css'
import Container, { WatchContainer } from '@components/Container'
import { ContentContainer } from '@components/Container'
import UseTimeline from '../../../hooks/UseTimeline'
import { BarLoader } from 'react-spinners'

function Timeline() {
    const { dateChange, state } = UseTimeline()

    return (
        <ContentContainer title="Timeline">
            <div className="justify-center max-w-4xl mx-auto">
                <Calendar
                    className="h-full"
                    onChange={dateChange}
                ></Calendar>
            </div>

            {state.loading ? (
                <Container background="white" opacity="30">
                    <div className="flex w-full justify-center">
                        <BarLoader width="100%" color='orange' />
                    </div>
                </Container>
            ) : state.data.length === 0 ? (
                    <Container background="white" opacity="30" >
                        <div className="font-fonarto">Tidak ada pertandingan</div>
                    </Container>
                ) : (
                    <>
                        {state.data.map((jadwal, index) => (
                            <WatchContainer key={index} title={jadwal.event_name} tanggal={jadwal.tanggal} jam={jadwal.waktu} deskripsi={jadwal.detail} link={jadwal.link} />
                        ))}
                    </>
                )}
        </ContentContainer>
    )
}

export default Timeline
