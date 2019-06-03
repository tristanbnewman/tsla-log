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

    override func viewDidLoad() {
        //Initializing variables
        super.viewDidLoad()
        let trade1 = Trade(id: 123, price: 12.1, date: "1/1/1", tradeType: "sell", tradePoint: 12.1)
        print(trade1.id)
        
        //Networking
        Alamofire.request("http://localhost:5050/api/stocks", method: .get).responseJSON { response in
            print(response)
        }
        
        //Configuring label outlets
    }
    
    override func viewDidAppear(_ animated: Bool) {
        
    }

}

