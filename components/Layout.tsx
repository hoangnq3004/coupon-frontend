import * as React from 'react'
import {NextPage} from "next";

type Props = {}

const Layout: NextPage<Props> = ({children}) => (
  <div>
    {children}
  </div>
)

export default Layout
