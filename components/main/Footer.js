import Style from '../../styles/Footer.module.scss'
function Footer() {
    return (
        <div className={Style.footer}>
            
        <div className={Style.footerbox}>
            <div className={Style.footersection}>
            <h3>Product</h3>
            <h4>Updates</h4>
            <h4>Security</h4>
            <h4>Chrome Extension</h4>
            </div>
            <div className={Style.footersection}>
            <h3>Company</h3>
            <h4>About</h4>
            <h4>Blog</h4>
            <h4>Join US</h4>
            </div>
            <div className={Style.footersection}>
            <h3>Industries</h3>
            <h4>Startups</h4>
            <h4>Venture Capital</h4>
            <h4>Private Equity</h4>
            </div>
            <div className={Style.footersection}>
            <h3>Help</h3>
            <h4>Talk to Support</h4>
            <h4>Support Docs</h4>
            <h4>System Status</h4>
            </div>
        </div>
        </div>
    )
}

export default Footer
