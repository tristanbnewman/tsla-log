//
//  ViewController.swift
//  tsla-stock
//
//  Created by Tristan Newman on 6/7/19.
//  Copyright © 2019 Tristan Newman. All rights reserved.
//
import Foundation
import UIKit
import Alamofire
import SwiftyJSON

class TradeTableViewController: UITableViewController{
    
    var tradeArray = [Trade]()

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        //NETWORKING: Gets the trades from server
        Alamofire.request("http://localhost:5050/api/stocks", method: .get)
            .responseJSON{ response in
                
                if(response.result.isSuccess){
//                    self.tradesJSON  = JSON(response.result.value)
                    //CONFIGURATION: Configures JSON data to Trades Object
                    let tradesJSON  : JSON = JSON(response.result.value)
                    tradesJSON.forEach { trade in
//                        print(trade.1["date"])
//                        let date = trade.1["date"].stringValue
//                        print(date)
                        let newTrade = Trade(date: trade.1["date"].stringValue, price: trade.1["price"].floatValue, period: trade.1["estimated_period"].intValue)
//                        print(newTrade.period)
                        self.tradeArray.append(newTrade)
//                        print(self.trades.list[0]!.price)
                    }
//                    print(self.trades.list[1]!.price)
                    
                }
                else{
                    print(response.result.error)
                }
                print(self.tradeArray[1].price)
                
                self.configTableView()
                self.tableView.reloadData()
        }
        
//        print(trades.list[1]!.price)
//        print(trades.list)
    }
    
    
    //DELEGATION: Delegates Trades Object to the tradesTableView
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return tradeArray.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "tradeCell", for: indexPath)
//        print(indexPath)
//        print(self.trades.list[0]!.date)
            cell.textLabel?.text = tradeArray[indexPath.row].date
//            print(tradeArray[indexPath.row])
//        cell.textLabel?.text = self.trades.list[0]!.date
        
        return cell
    }

    //Configure table view
    func configTableView(){
        tableView.rowHeight = UITableView.automaticDimension
        tableView.estimatedRowHeight = 120.0
    }

}

