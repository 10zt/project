package com.project.demo.entity;

import com.alibaba.fastjson.annotation.JSONField;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.*;

import java.io.Serializable;
import java.sql.Timestamp;


/**
 * 学习进度：(RateOfLearning)表实体类
 *
 */
@TableName("`rate_of_learning`")
@Data
@EqualsAndHashCode(callSuper = false)
public class RateOfLearning implements Serializable {

    // RateOfLearning编号
    @TableId(value = "rate_of_learning_id", type = IdType.AUTO)
    private Integer rate_of_learning_id;

    // 学生用户
    @TableField(value = "`student_users`")
    private Integer student_users;
    // 学生姓名
    @TableField(value = "`student_name`")
    private String student_name;
    // 课程名称
    @TableField(value = "`course_name`")
    private String course_name;
    // 学习进度
    @TableField(value = "`rate_of_learning`")
    private String rate_of_learning;



    // 审核状态
    @TableField(value = "examine_state")
    private String examine_state;



    // 审核回复
    @TableField(value = "examine_reply")
    private String examine_reply;




    // 更新时间
    @TableField(value = "update_time")
    private Timestamp update_time;

    // 创建时间
    @TableField(value = "create_time")
    private Timestamp create_time;







}
