export default function UserInput({onChange,userInput}){

    return(
        <section id = "user-input">
            <div className="input-group">
                <p>
                    <label id="user-input label">Initial Investment</label>
                    <input 
                        id="user-input input"
                        type="number" 
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) => onChange('initialInvestment',event.target.value)}
                    />
                </p>
                <p>
                    <label id="user-input label"> Annual Investment</label>
                    <input 
                        id="user-input input"
                        type="number" 
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) => onChange('annualInvestment',event.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label id="user-input label">Expected Return</label>
                    <input 
                        id="user-input input"
                        type="number" 
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) => onChange('expectedReturn',event.target.value)}
                    />
                </p>
                <p>
                    <label id="user-input label">Duration</label>
                    <input 
                        id="user-input input"
                        type="number" 
                        required
                        value={userInput.duration}
                        onChange={(event) => onChange('duration',event.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}