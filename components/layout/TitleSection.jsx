
import Link from "next/link"

function TitleSection({title, link}) {
    return (
        <div className="container flex justify-between items-center mb-16 lg:mb-28 mt-32">
            <h3 className="flex items-center gap-x-2 text-white font-mono font-bold text-2xl lg:text-4xl">
                <svg className="" width="27" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="24.6523" width="6.22587" height="24.0141" transform="rotate(24.8486 24.6523 0)" fill="white" />
                    <rect x="11.0898" width="6.22587" height="24.0141" transform="rotate(24.8486 11.0898 0)" fill="#5F5F5F" />
                </svg>
                {title}
            </h3>
            <Link href={link} className="text-white flex items-center gap-x-2">
                All
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2245 18.0418H3.51619C2.59952 18.0418 1.79121 17.5668 1.34954 16.7668C0.907876 15.9668 0.93289 15.0252 1.41622 14.2502L3.72452 10.5585C3.90786 10.2668 3.90786 9.72516 3.72452 9.44183L1.41622 5.75016C0.93289 4.97516 0.907876 4.0335 1.34954 3.2335C1.79121 2.4335 2.60786 1.9585 3.51619 1.9585H13.0495C13.8329 1.9585 14.7412 2.4585 15.1495 3.12516L18.6329 8.69183C19.0995 9.44183 19.0579 10.5918 18.5245 11.3002L14.2079 17.0502C13.7829 17.6168 12.9329 18.0418 12.2245 18.0418ZM3.51619 3.2085C3.06619 3.2085 2.65787 3.44183 2.44121 3.84183C2.22454 4.24183 2.23286 4.7085 2.47452 5.09183L4.78287 8.7835C5.21621 9.4835 5.21621 10.5335 4.78287 11.2335L2.47452 14.9252C2.23286 15.3085 2.22454 15.7752 2.44121 16.1752C2.65787 16.5752 3.06619 16.8085 3.51619 16.8085H12.2245C12.5412 16.8085 13.0162 16.5668 13.2079 16.3168L17.5246 10.5668C17.7496 10.2668 17.7746 9.69183 17.5746 9.37516L14.0912 3.8085C13.9079 3.5085 13.3995 3.2335 13.0495 3.2335H3.51619V3.2085Z" fill="white" />
                </svg>
            </Link>
        </div>
    )
}

export default TitleSection