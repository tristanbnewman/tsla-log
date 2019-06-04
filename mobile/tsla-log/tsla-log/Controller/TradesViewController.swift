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
    
    var trades = Trades()
    
    override func viewDidLoad() {
        //Initializing variables
        super.viewDidLoad()
        
        //Networking
        Alamofire.request("http://localhost:5050/api/stocks", method: .get).responseJSON { response in
            if response.result.isSuccess {
                let tradesJSON : JSON = JSON(response.result.value!)
//                print(tradesJSON)
                
                tradesJSON.forEach{trade in
//                    print(trade)
                    let newTrade = Trade(price: trade.1["price"].floatValue, date: trade.1["date"].stringValue, period: trade.1["estimated_period"].intValue)
                    self.trades.trades.append(newTrade)
                }
                
//                Confirms JSON trades are added to the trades object
//                print(trades.trades[1].date)
            }
            else{
                print(response.result.error!)
            }
            
            //Configuring label UI
            self.periodLabel.text = String(self.trades.trades[1].period)
            self.dateLabel.text = self.trades.trades[1].date
            self.priceLabel.text = String(self.trades.trades[1].price)
            print(self.trades.trades)
        }
        
        print(self.trades.trades)
    }
    
    override func viewDidAppear(_ animated: Bool) {
        
    }

}

