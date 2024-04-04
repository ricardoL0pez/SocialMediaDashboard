
const Header = () => {
    return (
        <header className=" bg-Very-Pale-Blue h-[235px] rounded-b-[20px] pt-8 px-6">
            <h1 className="text-Very-Dark-Blue text-2xl font-bold mb-1">Social media dashboard</h1>
            <p className=" text-Dark-Grayish-Blue font-bold mb-6">Total Followers: 23,004</p>
            <hr className=" bg-black mb-[19px]" />
            <div className="flex justify-between">
                <p className=" text-Dark-Grayish-Blue font-bold">Dark Mode</p>
                <label htmlFor="darkmode" className="border bg-Toggle w-12 h-6 rounded-full cursor-pointer p-[3px]">
                    <input id="darkmode" type="checkbox" className="peer sr-only" />
                    <div className="bg-red-600 w-[30px] h-[30px] peer-checked:bg-Toggle-Gradient"></div>
                    <div className=" w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[24px] transition-all"></div>
                </label>

            </div>
        </header>
    )
}

export default Header
