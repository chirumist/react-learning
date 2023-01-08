import { LogoComponent } from './LogoComponent'
import { NavbarComponent } from './NavbarComponent'

export const HeaderComponent = () => {
    return (
        <div className='flex justify-between items-center px-6 py-4 border border-bottom'>
            <LogoComponent />
            <NavbarComponent></NavbarComponent>
        </div>
    )
}