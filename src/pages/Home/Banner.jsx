import img1 from '../../assets/images/banner/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg'
import img2 from '../../assets/images/banner/christina-wocintechchat-com-eS72kLFS6s0-unsplash.jpg'
import img3 from '../../assets/images/banner/annie-spratt-QckxruozjRg-unsplash.jpg'
import img4 from '../../assets/images/banner/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="rounded-lg" />
                <div className="absolute rounded-xl flex items-center h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%);]">
                   <div className=' text-white space-y-7 pl-5 w-1/2'>
                    <h2 className="text-5xl font-bold">Innovative Solutions Software</h2>
                    <p className='text-white'>Transforming visions into powerful web solutions Crafting web excellence, one pixel at a time</p>
                    <div>
                    <button className="btn btn-success mr-5 text-white">Discover More</button>
                    <button className="btn btn-outline btn-warning text-white">Latest Project</button>
                    </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-[1150px] h-[850px] rounded-lg" />
                <div className="absolute rounded-xl flex items-center h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%);]">
                   <div className='text-white space-y-7 pl-5 w-1/2'>
                    <h2 className="text-5xl font-bold">Innovative Solutions Software</h2>
                    <p className='text-white'>Transforming visions into powerful web solutions Crafting web excellence, one pixel at a time</p>
                    <div>
                    <button className="btn btn-success mr-5 text-white">Discover More</button>
                    <button className="btn btn-outline btn-warning text-white">Latest Project</button>
                    </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-[1150px] h-[850px] rounded-lg" />
                <div className="absolute rounded-xl flex items-center h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%);]">
                   <div className='text-white space-y-7 pl-5 w-1/2'>
                    <h2 className="text-5xl font-bold">Innovative Solutions Software</h2>
                    <p className='text-white'>Transforming visions into powerful web solutions Crafting web excellence, one pixel at a time</p>
                    <div>
                    <button className="btn btn-success mr-5 text-white">Discover More</button>
                    <button className="btn btn-outline btn-warning text-white">Latest Project</button>
                    </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-[1150px] h-[850px] rounded-lg" />
                <div className="absolute rounded-xl flex items-center h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%);]">
                   <div className='text-white space-y-7 pl-5 w-1/2'>
                    <h2 className="text-5xl font-bold">Innovative Solutions Software</h2>
                    <p className='text-white'>Transforming visions into powerful web solutions Crafting web excellence, one pixel at a time</p>
                    <div>
                    <button className="btn btn-success mr-5 text-white">Discover More</button>
                    <button className="btn btn-outline btn-warning text-white">Latest Project</button>
                    </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;