import PublicNavBar from "@/components/shared/PublicNavbar";

const commonLayout=({children}:{children:React.ReactNode})=>{
    return (
            <>
            <PublicNavBar/>
              {children}
            </>
    )
}

export default commonLayout;