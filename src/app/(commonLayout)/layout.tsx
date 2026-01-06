import PublicNavBar from '@/components/shared/PublicNavbar'
import React from 'react'

const commonLayout=({children}:{children:React.ReactNode})=> {
  return (
    <>
        <PublicNavBar></PublicNavBar>
      {children}
    </>
  )
}

export default commonLayout
