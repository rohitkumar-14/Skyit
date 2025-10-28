import React, { useState, useEffect, useRef } from "react";
import darkLogo from "../../public/assets/images/logo/dark.png";
import lightLogo from "../../public/assets/images/logo/light.png";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState({});
    const mainHeaderRef = useRef(null);
    const initialHeaderTopBg = "#7A7A7A";
    const stickyHeaderBg = "#0B1E33";

    useEffect(() => {
        const handleScroll = () => {
            if (mainHeaderRef.current) {
                const header = mainHeaderRef.current;
                const mainHeaderArea = header.closest(".main-header_area");
                const headerTop = mainHeaderArea.querySelector(".header-top");

                if (window.scrollY > 100) {
                    header.classList.add("is-sticky");
                    header.style.backgroundColor = stickyHeaderBg;
                    if (headerTop) headerTop.style.display = "none";
                } else {
                    header.classList.remove("is-sticky");
                    header.style.backgroundColor = stickyHeaderBg;
                    if (headerTop) headerTop.style.display = "block";
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [stickyHeaderBg]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setMobileSubMenuOpen({});
    };

    const handleMobileSubMenuToggle = (e, menuItemKey) => {
        e.preventDefault();
        e.stopPropagation();

        setMobileSubMenuOpen((prev) => {
            const isOpen = prev[menuItemKey];
            return {
                [menuItemKey]: !isOpen,
            };
        });
    };

    const renderMobileMenuItem = (item, index, parentKey = null) => {
        const hasSubMenu = item.subItems && item.subItems.length > 0;
        const menuItemKey = parentKey
            ? `${parentKey}-${index}`
            : item.text.toLowerCase().replace(/\s/g, "-");
        const isOpen = mobileSubMenuOpen[menuItemKey];

        return (
            <li
                key={menuItemKey}
                className={`drop-holder ${hasSubMenu ? "menu-item-has-children" : ""} ${
                    isOpen ? "menu-open" : ""
                }`}>
                <a
                    href={item.link || "#"}
                    onClick={hasSubMenu ? (e) => handleMobileSubMenuToggle(e, menuItemKey) : undefined}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <span className="mm-text">{item.text}</span>
                    {hasSubMenu && (
                        <button
                            className="menu-expand border-0 bg-transparent text-white ms-2"
                            onClick={(e) => handleMobileSubMenuToggle(e, menuItemKey)}
                            aria-label={`Toggle ${item.text} submenu`}
                            style={{ padding: '0 5px' }} 
                        >
                            <i className={`ion-ios-arrow-${isOpen ? "up" : "down"}`}></i>
                        </button>
                    )}
                </a>

                {hasSubMenu && (
                    <ul
                        className="sub-menu"
                        style={{
                            maxHeight: isOpen ? "500px" : "0", 
                            overflow: "hidden",
                            display: isOpen ? "block" : "none",
                            transition: "max-height 0.3s ease-in-out", 
                        }}>
                        {item.subItems.map((subItem, subIndex) =>
                            // Recursive call for nested items
                            renderMobileMenuItem(subItem, subIndex, menuItemKey)
                        )}
                    </ul>
                )}
            </li>
        );
    };

    const navItems = [
        { text: "Home", link: "/" },
        { text: "About Us", link: "/about" },
        {
            text: "Services",
            link: "#", 
            subItems: [
                { text: "Project Management", link: "/services/project-management" },
                { text: "Pre-Design Activity", link: "/services/pre-design" },
                {
                    text: "Construction Implementation",
                    link: "/services/construction-implementation",
                },
                {
                    text: "Specialized Construction",
                    link: "/services/specialized-construction",
                },
            ],
        },
        {
            text: "Project",
            link: "#",
            subItems: [
                {
                    text: "Hospitality Sector",
                    link: "/project/hospitality-sector-projects",
                },
                {
                    text: "Logistics & Industrial",
                    link: "/project/logistics-industrial-projects",
                },
                {
                    text: "Corporate & Commercial",
                    link: "/project/corporate-commercial-projects",
                },
                { text: "Residential", link: "/project/residential-projects" },
                { text: "Healthcare", link: "/project/healthcare-projects" },
                {
                    text: "Entertainment & Multiplex",
                    link: "/project/entertainment-multiplex-projects",
                },
                {
                    text: "Educational Sector",
                    link: "/project/educational-sector-projects",
                },
                {
                    text: "Urban Development & Smart City",
                    link: "/project/urban-development-smart-city-projects",
                },
            ],
        },
        { text: "Contact", link: "/contact" },
    ];

    return (
        <header className="main-header_area position-relative">
            <div
                className="header-top py-6 py-lg-3"
                data-bg-color={initialHeaderTopBg}
                style={{ backgroundColor: initialHeaderTopBg }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="offset-xl-2 offset-lg-3 col-xl-4 col-lg-5 d-none d-lg-block ms-auto">
                            <div className="header-top-right text-end">
                                <div className="contact-number d-flex align-items-center">
                                    <i className="fa-regular fa-envelope text-white me-2"></i>
                                    <a
                                        href="mailto:info@example.com"
                                        className="text-white text-decoration-none">
                                        info@example.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 d-block d-lg-none">
                            <div className="header-logo d-flex align-items-center justify-content-between w-100">
                                <a href="/" className="text-white text-decoration-none">
                                    <h1 className="h5 mb-0 text-white">SKYIT CONSTRUCTION PVT LTD </h1>
                                </a>
                                <button
                                    onClick={toggleMobileMenu}
                                    className="border-0 bg-transparent pl-0"
                                    aria-label="Toggle mobile menu">
                                    <i className="fa fa-navicon text-white fs-4"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="main-header header-sticky"
                data-bg-color={stickyHeaderBg}
                ref={mainHeaderRef}
                style={{ backgroundColor: stickyHeaderBg }}>
                <div className="container">
                    <div className="main-header_nav">
                        <div className="row align-items-center">
                            <div className="offset-xl-2 col-xl-10 d-none d-lg-block">
                                <div className="main-menu text-center">
                                    <nav className="main-nav">
                                        <ul>
                                            {navItems.map((item) => (
                                                <li
                                                    key={item.text}
                                                    className={`drop-holder ${
                                                        item.subItems ? "drop-holder" : ""
                                                    }`}>
                                                    <a href={item.link}>
                                                        <span>{item.text}</span>
                                                    </a>
                                                    {item.subItems && (
                                                        <ul className="drop-menu">
                                                            {item.subItems.map((subItem) => (
                                                                <li key={subItem.text}>
                                                                    <a href={subItem.link}>{subItem.text}</a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-logo-wrap d-none d-lg-flex">
                        <div className="header-fixed-logo">
                            <a href="/">
                                <h5 className="mb-0">SKYIT CONSTRUCTION PVT LTD</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`mobile-menu_wrapper ${isMobileMenuOpen ? "open" : ""}`}
                id="mobileMenu">
                <div className="offcanvas-body">
                    <div className="inner-body">
                        <div className="offcanvas-top">
                            <button
                                onClick={closeMobileMenu}
                                className="button-close border-0 bg-transparent pl-0"
                                aria-label="Close mobile menu">
                                <i className="ion-ios-close-empty text-white fs-4"></i>
                            </button>
                        </div>
                        <div className="offcanvas-menu_area">
                            <nav className="offcanvas-navigation">
                                <ul className="mobile-menu">
                                    {navItems.map((item, index) =>
                                        renderMobileMenuItem(item, index)
                                    )}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`global-overlay ${isMobileMenuOpen ? "visible" : ""}`}
                onClick={closeMobileMenu}></div>
        </header>
    );
};

export default Navbar;