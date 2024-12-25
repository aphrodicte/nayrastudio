const name = "Nayzala Aura Riyana";
const kota = "Semarang";
const birthYear = "2006";
const currentYear = "2024";
const Header = () => {
    return (
        <>
        
        <div className="flex flex-col min-h-screen justify-center items-center bg-grey-500">
            
           

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" colSpan={2} className="px-6 py-3 text-center">
                    BIODATA DIRI
                </th>
                
                
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Nama
                </th>
                <td className="px-6 py-4">
                    {name}
                </td>
                
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Kota Asal
                </th>
                <td className="px-6 py-4">
                    {kota}
                </td>
                
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Umur
                </th>
                <td className="px-6 py-4">
                    {currentYear-birthYear}
                </td>
                
            </tr>

            
            <tr className="bg-white dark:bg-gray-800 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Motto
                </th>
                <td className="px-6 py-4">
                Mengubah ide menjadi karya yang memukau
                </td>
               
                
            </tr>
        </tbody>
    </table>
</div>

        </div>
        </>
    )
}

export default Header;