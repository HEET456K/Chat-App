const GenderCheakBox = () => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className={'label gap-2 cursor-pointer'}>
                    <span className="label-text font-bold">Male</span>
                    <input type="checkbox" className="checkbox border-slate-500" />
                </label>
            </div>
            <div className="form-control">
                <label className={'label gap-2 cursor-pointer'}>
                    <span className="label-text font-bold">Female</span>
                    <input type="checkbox" className="checkbox border-slate-500 " />
                </label>
            </div>
        </div>
    )
}

export default GenderCheakBox
