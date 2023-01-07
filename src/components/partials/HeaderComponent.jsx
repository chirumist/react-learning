import { LogoComponent } from './LogoComponent'
import { NavbarComponent } from './NavbarComponent'

export const HeaderComponent = () => {
    return (
        <div className='flex justify-between items-center px-6 py-4 border border-bottom'>
            {LogoComponent()}
            <input type="text" className="bg-gray-200 rounded w-2/5 px-4 py-2" placeholder='Search Here...'/>
            <NavbarComponent></NavbarComponent>
        </div>
    )
}