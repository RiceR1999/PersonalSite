import Link from 'next/link';

const Header = () => {
    return (
    <div class="nav-content">
        <div class="backdrop">
            <div class="nav, foreground">
                <ul class="nav">
                  <Link href="/"><li class="nav-item, navbar-text">Home</li></Link> 
                   <Link href="/projects"><li class="nav-item, navbar-text">Projects</li></Link> 
                    <Link href="/skills"><li class="nav-item, navbar-text">Skills</li></Link> 
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Header;