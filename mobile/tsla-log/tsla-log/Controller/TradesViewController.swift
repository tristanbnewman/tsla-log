//
//  ViewController.swift
//  tsla-log
//
//  Created by Tristan Newman on 6/3/19.
//  Copyright © 2019 Tristan Newman. All rights reserved.
//

import UIKit
import Alamofire
import SwiftyJSON

class TradesViewController: UIViewController {

    @IBOutlet weak var periodLabel: UILabel!
    @IBOutlet weak var dateLabel: UILabel!
    @IBOutlet weak var priceLabel: UILabel!
    
    override func viewDidLoad() {
        //Initializing variables
        super.viewDidLoad()
        var trade1 = Trade(price: 12.1, date: "1/1/1", period: 14)
        var trades = Trades(trades: [trade1])
        
        //Networking
        Alamofire.request("http://localhost:5050/api/stocks", method: .get).responseJSON { response in
            if response.result.isSuccess {
                let tradesJSON : JSON = JSON(response.result.value!)
                
                tradesJSON.forEach{trade in
                    print(trade.1["estPeriod"])
                    let newTrade = Trade(price: trade.1["price"].floatValue, date: trade.1["date"].stringValue, period: trade.1["estPeriod"].intValue)
                    trades.trades.append(newTrade)
                }
                
//                Confirms JSON trades are added to the trades object
//                print(trades.trades[0].date)
            }
            else{
                print(response.result.error!)
            }
        }
        
        //Configuring label UI
        periodLabel.text = String(trades.trades[0].period)
        dateLabel.text = trades.trades[0].date
        priceLabel.text = String(trades.trades[0].price)
    }
    
    override func viewDidAppear(_ animated: Bool) {
        
    }

}

