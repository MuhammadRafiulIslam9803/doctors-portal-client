import chair from '../../assets/images/chair.png'
import appointment from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';

const BookingBanner = ({selected , setSelected}) => {
    return (
        <section>
            <div>
                <div className="hero" style={{
                    background: `url(${appointment})`,
                    backgroundSize: 'cover'
                }}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={chair} alt='' className=" lg:ml-10 w-1/2 rounded-lg shadow-2xl" />
                        <div className=' lg:mr-10'>
                            <DayPicker
                                mode='single'
                                selected={selected}
                                onSelect={setSelected}
                            ></DayPicker>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BookingBanner;