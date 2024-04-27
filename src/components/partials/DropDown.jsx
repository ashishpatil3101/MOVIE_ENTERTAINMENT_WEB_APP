export const DropDown =({title, options,setCateFun})=>{
    return(
        <div className="select">
             <select defaultValue="0" name="format" id="format" onChange={(e)=>setCateFun(e.target.value)}>
                <option value="0" disabled>{title}</option>
                {options.map((o, i)=>(
                 <option key={o} value={o}>{o.toUpperCase()}</option>

                ))}
             </select>
        </div>
    )
}