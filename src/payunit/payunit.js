import React , {Component}  from 'react'
import { PayUnit } from "payunitjs"

export default class PayUnitComponent extends Component {
    
    componentDidMount() {
        PayUnit(
            {
              apiUsername: "payunit_SRKjuakig",
              apiPassword: "d08c99c0-3829-488e-9d5a-5a8013019e76",
              x_api_key: "c76baf7258f68c72a8264724c27d5ba32b1d9217",
              mode: "live",
            },
            {
              
              return_url: "http://localhost:3000",
              notify_url: "http://localhost:3000",
              description: "Online payment with payunit js sdk",
              purchaseRef: "",
              total_amount: "50",
              name: "test",
              currency: "XAF",
    
            }
          );
    }
   render() {
      return (
          <div>
             <button id ="payunit-pay"> Pay  with payunit </button>
          </div>
        )
    }
}
