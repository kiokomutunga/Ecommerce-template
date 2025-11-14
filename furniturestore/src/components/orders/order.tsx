type statusprop ={
    status: 'pending' | 'shipped' | 'delivered' | 'cancelled'
}

const Order = (props: statusprop) => {
    let message

    if (props.status === 'pending'){
        message = "your order is being processed"
    }
    else if (props.status === 'shipped'){
        message = "your order is on the way"
    }
    else if (props.status === 'delivered'){
        message = "your order has been delivered"
    }
    else if (props.status === 'cancelled'){
        message = "your order has been cancelled"
    }
    return(
        <div>
            status of the your order: {message}

        </div>

    )
}

export default Order;