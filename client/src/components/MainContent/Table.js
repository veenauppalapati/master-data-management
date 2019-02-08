import React from 'react'
import TableRow from './TableRow';
const styles = {
    columnHeadingStyling: {
        fontSize: 15,
        textAlign: 'center',
        padding: 5,
        borderBottom: 'solid black 2px',
        borderRight: 'dotted black 2px',
        borderTop: 'none',    
    }
};
export default class Table extends React.Component {
    state = {
        tableData: [],

    }

    componentDidMount = () => {
        //Get data after component mounts

        //axios.get
        const dummyData = [
            {
                currency: "GBP",
                symbol: 1,
                description: 'British Pound',
                exchangeRate: '',
            },
            {
                currency: "AUD",
                symbol: '',
                description: '',
                exchangeRate: '',
            },
            {
                currency: "CAD",
                symbol: '',
                description: '',
                exchangeRate: '',
            },
            {
                currency: "INR",
                symbol: '',
                description: '',
                exchangeRate: '',
            },
            {
                currency: "",
                symbol: '',
                description: '',
                exchangeRate: '',
            },
            {
                currency: "",
                symbol: '',
                description: '',
                exchangeRate: '',
            },

        ];
        if (dummyData) {
            this.setState({ tableData: dummyData })
        }
    }

    render() {
        return (
            <div>
                {/* This is the Title bar  for the spreadsheet panel */}
                <h2
                    style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        borderBottom: '1.5px solid darkgray',
                        padding: '10px',
                        marginBottom: '20px'
                    }}>Supported Currencies
                </h2>

                <table class="table">
                    {/* This is the heading section of the table cells */}
                    <thead>
                        <tr>
                            <th style={styles.columnHeadingStyling}>Currency</th>
                            <th style={styles.columnHeadingStyling}>Symbol</th>
                            <th style={styles.columnHeadingStyling}>Description</th>
                            <th style={styles.columnHeadingStyling}>Exchange Rate</th>
                        </tr>
                    </thead>
                    {/* Body section-- loads the TableRow Component */}
                    <tbody>
                        {
                            this.state.tableData.map(e =>
                                <TableRow
                                    cell1={e.currency}
                                    cell2={e.symbol}
                                    cell3={e.description}
                                    cell4={e.exchangeRate} />)
                        }
                            <TableRow />
                            <TableRow />
                            <TableRow />
                            <TableRow />
                            <TableRow />
                            <TableRow />
                            <TableRow />
                            <TableRow />
                            <TableRow />

                    </tbody>
                </table>
            </div>
        )
    }
}

