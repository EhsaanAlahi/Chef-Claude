    import image from '../assets/chef-claude-icon.png';
    export default function Header() {
        return (
            <header className="header">
                <img src={image} alt="Chef Claude" className="logo" />
                <h1>Chef Claude</h1>
                
            </header>
        )
    }