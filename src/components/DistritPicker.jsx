import React from 'react';
import {
    NativeSelect,
    FormControl
} from '@material-ui/core'

const DistrictPicker = ({
        data,
        getDistrict
    }) => {

        if (!data.Thane) {
            return ("")

        }


        const Listoption = Object.keys(data)


        return ( 
        <FormControl >
            <NativeSelect style = {
                {
                    backgroundColor: "#262529",
                    color: "white",
                    width: "300px",
                    height: "50px",
                    borderRadius: "10px",
                    textAlign: "center",
                    lineHeight: "1.5",
                    padding: "5%",
                    marginBottom:"50px"
                }
            }
            defaultValue = 'Thane'
            variant = 'filled'
            onChange = {
                (e) => getDistrict(e.target.value)
            } > {
                Listoption.map((city, i) => < option style = {
                        {
                            backgroundColor: "#262529",
                            color: "white",
                            width: "50px",
                            height: "50px",
                            borderRadius: "10px",
                            textAlign: "center",
                            lineHeight: "1",
                            padding: "4%"
                        }
                    }
                    key = {
                        i
                    }
                    value = {
                        city
                    } > {
                        city
                    } 
                    
                    </option>)

                }

            </NativeSelect> 
        </FormControl>
            )
        }

        export default DistrictPicker;